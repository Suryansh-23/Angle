import {
    HuddleAppEvent,
    HuddleIframe,
    IframeConfig,
    huddleIframeApp,
} from "@huddle01/huddle01-iframe";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAccount } from "wagmi";

const Meet = () => {
    const router = useRouter();
    const { room } = router.query;
    const { address } = useAccount();

    const iframeConfig: IframeConfig = {
        roomUrl: `https://iframe.huddle01.com/${room}`,
        height: "100%",
        width: "100%",
        noBorder: true, // false by default
    };

    useEffect(() => {
        console.log("====================================");
        console.log("Address", address);
        console.log(huddleIframeApp);
        console.log("====================================");

        huddleIframeApp.on(HuddleAppEvent.ME_LEFT, (data) =>
            console.log("meeting ended", { iframeData: data })
        );

        huddleIframeApp.on(HuddleAppEvent.PEER_LEFT, (data) =>
            console.log("peer left", { iframeData: data })
        );
    }, [address]);

    return (
        <div className="h-screen">
            <HuddleIframe config={iframeConfig} />
            {/* <button
                onClick={() => {
                    console.log("Connecting Wallet");
                    huddleIframeApp.methods.connectWallet(address);
                }}
            >
                Connect Wallet
            </button> */}
        </div>
    );
};

export default Meet;
