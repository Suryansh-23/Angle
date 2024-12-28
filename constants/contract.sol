//SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

contract angle {
    address immutable i_owner;
    address[] public universalUsersArray;
    mapping(address => string) public addressToInterests;
    uint256 public indexToBeUpdatedInStruct;
    string[] public meetIdArray;
    mapping(string=>address) meetIdToAddress;

    struct user {
        string name;
        address userAddress;
        string interests; // [basketball, movies, tech, comedy, ...]
        uint256 userRating;
        uint256 numberOfMeetsDone;
        uint256 hoursSpent;
    }

    user[] public users;

    event MeetWorked(string meetId, address userAddress);

    error NotOwner();

    constructor() {
        i_owner = msg.sender;
    }

    modifier onlyOwner() {
        if (i_owner != msg.sender) revert NotOwner();
        _;
    }

    //function for mapping interests to addresses
    function mapInterests(address _address, string memory _interests)
        public 
    {
        addressToInterests[_address] = _interests;
    }

    function theMeetWork(address _address) public {
        
        //initially user1 is the address coming in

        address addressOfUser1 = _address;

        //first case, meet ID already present
        if(meetIdArray.length>0){
            //now gotta match interests and send the meet id to the address
            //first getting the interest of the new user - user2
            string memory interestOfUser2 = addressToInterests[_address];

            //looping for matching the interest
            //but first making a memory duplicate of meetId array to save gas
            string[] memory duplicateMeetIdArray = meetIdArray;
            for(uint i=0; i<duplicateMeetIdArray.length; i++){

                addressOfUser1 = meetIdToAddress[duplicateMeetIdArray[i]];
                string memory interestOfUser1 = addressToInterests[addressOfUser1];
                if( keccak256(abi.encodePacked(interestOfUser1)) == keccak256(abi.encodePacked(interestOfUser2))){
                        //return the meet id to user2 address
                    string memory finalId = meetIdArray[i];
                    for (uint k = i; i < duplicateMeetIdArray.length-1; k++){
                        meetIdArray[k] = meetIdArray[k+1];
                     }
                     meetIdArray.pop();

                     emit MeetWorked(finalId, addressOfUser1);
                     return;
                } 
            }

            //no one matches the interest, so just return randomly
            string memory finalMeetId = meetIdArray[meetIdArray.length-1];
            meetIdArray.pop();

            emit MeetWorked(finalMeetId, addressOfUser1);
            return;
            

        }else{
            //no meetId in the array, so first return false, add a meet ID to the meetIdArray.
            emit MeetWorked("0", addressOfUser1);
            return;
            //call addMeetId to the array
        }
    }

    function addMeetId(string memory _meetId, address _address) public {
        meetIdArray.push(_meetId);
        meetIdToAddress[_meetId] = _address;
    }
    
    function UpdatingUserMetrics(
        string memory _name,
        address _address,
        string memory _interests,
        uint256 _userRating,
        uint256 _numberOfMeetsDone,
        uint256 _hoursSpent
    ) public {

        //first checking if already exists
        user memory userToBeChecked;
        user[] memory usersMemoryArray = users;
        for (uint256 i = 0; i < usersMemoryArray.length; i++) {
            userToBeChecked = usersMemoryArray[i];
            address addressFromStruct = userToBeChecked.userAddress;
            if (_address == addressFromStruct) {
                indexToBeUpdatedInStruct = i;
               
               user storage updatedUser = users[indexToBeUpdatedInStruct];
                updatedUser.userRating = _userRating;
                updatedUser.interests = _interests;
                updatedUser.numberOfMeetsDone = _numberOfMeetsDone;
                updatedUser.hoursSpent = _hoursSpent;

                return;
            }
        }

        users.push(
            user(
                _name,
                _address,
                _interests,
                _userRating,
                _numberOfMeetsDone,
                _hoursSpent
            )
        );
    }

}