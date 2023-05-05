import "@/styles/globals.css";
import type { AppProps } from "next/app";

import {
    EthereumClient,
    w3mConnectors,
    w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal, useWeb3ModalTheme } from "@web3modal/react";
import { useEffect, useState } from "react";
import { MoralisProvider } from "react-moralis";
import { WagmiConfig, configureChains, createClient } from "wagmi";
import {
    arbitrum,
    avalanche,
    bsc,
    fantom,
    filecoinHyperspace,
    gnosis,
    mainnet,
    optimism,
    polygon,
} from "wagmi/chains";

// 1. Get projectID at https://cloud.walletconnect.com
if (!process.env.NEXT_PUBLIC_PROJECT_ID) {
    throw new Error("You need to provide NEXT_PUBLIC_PROJECT_ID env variable");
}
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

// 2. Configure wagmi client
const chains = [
    mainnet,
    polygon,
    avalanche,
    arbitrum,
    bsc,
    optimism,
    gnosis,
    fantom,
    filecoinHyperspace,
];

const { provider } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiClient = createClient({
    autoConnect: true,
    connectors: w3mConnectors({ version: 1, chains, projectId }),
    provider,
});

// 3. Configure modal ethereum client
const ethereumClient = new EthereumClient(wagmiClient, chains);

// 4. Wrap your app with WagmiProvider and add <Web3Modal /> compoennt
export default function App({ Component, pageProps }: AppProps) {
    const [ready, setReady] = useState(false);
    const { setTheme } = useWeb3ModalTheme();

    setTheme({
        themeMode: "dark",
        themeVariables: {
            "--w3m-accent-color": "#2563eb",
        },
    });

    useEffect(() => {
        setReady(true);
    }, []);

    return (
        <>
            {ready ? (
                <WagmiConfig client={wagmiClient}>
                    <MoralisProvider initializeOnMount={false}>
                        <Component {...pageProps} />
                    </MoralisProvider>
                </WagmiConfig>
            ) : null}
            <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
        </>
    );
}

