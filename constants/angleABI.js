module.exports = {
    abi: [
        {
            inputs: [],
            stateMutability: "nonpayable",
            type: "constructor",
        },
        {
            inputs: [],
            name: "NotOwner",
            type: "error",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "string",
                    name: "meetId",
                    type: "string",
                },
                {
                    indexed: false,
                    internalType: "address",
                    name: "userAddress",
                    type: "address",
                },
            ],
            name: "MeetWorked",
            type: "event",
        },
        {
            inputs: [
                {
                    internalType: "string",
                    name: "_name",
                    type: "string",
                },
                {
                    internalType: "address",
                    name: "_address",
                    type: "address",
                },
                {
                    internalType: "string",
                    name: "_interests",
                    type: "string",
                },
                {
                    internalType: "uint256",
                    name: "_userRating",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "_numberOfMeetsDone",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "_hoursSpent",
                    type: "uint256",
                },
            ],
            name: "UpdatingUserMetrics",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "string",
                    name: "_meetId",
                    type: "string",
                },
                {
                    internalType: "address",
                    name: "_address",
                    type: "address",
                },
            ],
            name: "addMeetId",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            name: "addressToInterests",
            outputs: [
                {
                    internalType: "string",
                    name: "",
                    type: "string",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "indexToBeUpdatedInStruct",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "_address",
                    type: "address",
                },
                {
                    internalType: "string",
                    name: "_interests",
                    type: "string",
                },
            ],
            name: "mapInterests",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            name: "meetIdArray",
            outputs: [
                {
                    internalType: "string",
                    name: "",
                    type: "string",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "_address",
                    type: "address",
                },
            ],
            name: "theMeetWork",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            name: "universalUsersArray",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            name: "users",
            outputs: [
                {
                    internalType: "string",
                    name: "name",
                    type: "string",
                },
                {
                    internalType: "address",
                    name: "userAddress",
                    type: "address",
                },
                {
                    internalType: "string",
                    name: "interests",
                    type: "string",
                },
                {
                    internalType: "uint256",
                    name: "userRating",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "numberOfMeetsDone",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "hoursSpent",
                    type: "uint256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
    ],
};
