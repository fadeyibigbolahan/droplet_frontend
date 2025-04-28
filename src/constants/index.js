import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star,
} from "../assets";

import safepal from "../assets/safepal.png";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "product",
    title: "Product",
  },
  {
    id: "clients",
    title: "Clients",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Rewards",
    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Balance Transfer",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const wallets = [
  {
    id: "metamask",
    title: "Metamask",
    img: "https://images.ctfassets.net/clixtyxoaeas/1ezuBGezqfIeifWdVtwU4c/d970d4cdf13b163efddddd5709164d2e/MetaMask-icon-Fox.svg",
  },
  {
    id: "trust",
    title: "Trust Wallet",
    img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QDhAPEA0QDw8QDhANDw8PDw8QDxAOFREXFhUSFRMYICggGBoxGxMVITEtJTUuMC4uFx8zOTMtQyg5LisBCgoKDg0OGhAQGy0lHx83KystLTMtLS4tKy0tMS0tLy0uNy0tLSstLTIvLS0tLysyLS0tLS8tKy0wLTArLS0rNf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAAAgcDBgQFCAH/xABCEAACAQIBBgcNCAEFAQAAAAAAAQIDBBEFBgcSITETIkFRYXGxFCMkMjM1QlJyc3SBskNigpGSoaKz0VRjk8HCCP/EABsBAQACAwEBAAAAAAAAAAAAAAABAwIEBgUH/8QANREBAAEDAQQHBgYDAQEAAAAAAAECAxEEBSExcRIiMkFRsdEGEyMzYYE0kaHB4fAkUnKiQv/aAAwDAQACEQMRAD8AvEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADqstZyWNmsbm7pUXhrakp41Wvu01jKXyRs6fR6jUTi1RM+X58EVVRTxV/lzTVawxjaWtS4eOHCVWqNPrS2yfzSPf03stfr33qop+kb59FU3o7lfZb0nZWusY909zQaw1LWPBfzxc/3Oh03s/orG/o9KfGrf+nD9FdVyqVo5r5TrxsrSXDTbdrQlLXevi3Si23ifN9oVzRrLtNPCKqvOXM16/UWr1fRq3ZndO+GyW2cT3VKWP3qb/wDL/wAmvF+O9v2dud12n7x6fy7S2ypQqbI1En6suLL8nvLYqieEvVs6/T3uxVGfDhLmmTcAAAAAAAAAAAAAAAAAAAAAAOly3nZk+yx7pvKVOS28Hra9X/jjjL9jb02g1Oo+VRMx4935zuYzXEcVf5c02UI4xs7OdV7UqleSpw61COLkuvVOg03srdq3364p+kb59PNVN7whX2XNI+VrvFSu3Qg/s7VcCv1Ljv5s6HTbC0VjfFHSnxq3/wAformuqe9qkpNtttttttva23vbZ68RERiGD4SAF4ZuT8CtPhLf+qJ8i2lR/mXf+qvNyWp+dXznzdmqh500KE1PHpMOhPcOVbX1Wn4lSSXqt60fyewmLlcNqzrb9nsVTy4w7S2zikvKU1JetB4P9L/yWRf8YerZ25MbrtP3j0n1dpbZXoT3VFF+rPiv995dTXFXB6tnaOnu9mrf4Tu83OTMm8+gAAAAAAAAAAAAAAdBl3PPJtk3G4vKUZx2OlBupWT5nThi188De02zdVqflUTMePCPzljNdMcVfZc03QWMbKycntSq3UtWOPPwcNrX4kdBpfZWud9+vH0j1n0lVN7whX2W8/8AKt3iql7OEH9lb95hhzPV2yXtNnQaXYmi0/ZoiZ8Z3+aua6p4y1k9ZgAAAAABc+b8/ArX4Wh/VE+XbQo/yrv/AFV5uS1Pzq+c+bslUNCbahNVCqbYyKoVzbE1UK5tiamV9Aci2vKlPxKko9GOMf0vYIrqpbFnVXrPYqmPp3O1t84ZrykFNc8eLL8nsf7FsX/F6tnbdcfMpz9Y3O0t8s0J7NfUfNPi/vuLYrpl61naemu8Ksc9znpmbeiX0JAAAAAAAAAADyzpC88X/wAXU7T6lsf8Da5Q06+1LXj0mIAAAAAAABb2Qp+CW3w1H+uJ8711H+Tc5z5uS1Pzq+c+bsFUNCbahkjUK5ticahXNsTVQqm2MkahXNAnGoVzQJxqFc2xNT2FfuyW+2viQ9iPYbdPB31r5dPKGUlYAAAAAAAAAAHlnSH54v8A4qp2n1LY/wCBtcoadfalrx6TEAAAAAAAAtXI0/Bbf4el9COG1dv49fOfNyWp+dXzlzlM05tqGRVCubYmqhVNAyKoVzQJqoVzQJqoVTbGRTK5tiaqFc2yVj2nk4exHsRDvrPy6eUMoWAAAAAAAAAAB5Z0h+eL/wCKqdp9S2P+Btcoadfalrx6TEAAAAAAAAsvJM/BqHuKX0I5LU2/jV85clqfnV85c6NQ1ZtqE1UKpoGSNQrmgTVQrm2JqoVzQMkahVNsTVQrm2J8IVTbJ4LRs/Jw9iP0o0pd9a+XTyhmIWAAAAAAAAAAB5Z0h+eL/wCKqdp9S2P+Btcoadfalrx6TEAAAAAAAAsPJk/B6Puaf0I529Tm5Vzlyepj4tXOXLUzXmhrpqZXNAyKoVzQJqoVzQMkahVNsTUyubYmqhVNsTdTY+or6CJ4LbsvJU/dw+lHiVdqXf2uxTyhnIWAAAAAAAAAAB5Z0h+eL/4qp2n1LY/4G1yhp19qWvHpMQAAAAAAADe8nS7xS91T+lHg3Y+JVzly+pj4tXOXLUyrDXmElMjCOimpmPRhjhNTK/doTVQwm2JqZVNsZFUK5oEtfY+or6CJ4LlsPI0/dw+lHL19qXf2uxTyhyDFYAAAAAAAAAAHlnSH54v/AIqp2n1LY/4G1yhp19qWvHpMQAAAAAAADdcny7zS91D6UeLcjrzzlzeoj4tXOXJUyrCjCamRMMcJKRGETCSmY4RMJqZEwx6KamY9FjhKMzGaBPhCvoIXfk/yNL3UPpRxNztzzd9a7FPKHIMVgAAAAAAAAAAeWtIsWssX+P8Aqpv5Paj6lsec6G1yadfalrp6TEAAAAAAAA22xl3qn7uH0o8m5HXq5y5+/HxKucuSplWFMwmpkTCMJKZGGOE1MxwxwkpkYRhNSIwxmElMiYRMJa5GGOF82Cwo01zU4L+KOBuTmurnLvLfYjlDOYMwAAAAAAAAAA83aY7J0stXEuStCjXj1OmoP+UJH0f2cuxXoKY/1mY/XP7tW5GKpaSe6rAAAAAAAANns5d6p+7j2Hl1x1peHdjr1c2dTMMKsJqZEwxwkpEYRMJqRjhjMJKZEwjCamRhjhJTMcIw5NlSdWrTpLfUqQpLrlJR/wCyq9V0LdVfhEymi3064p8dz0BFYbPkfP3bvoAAAAAAAAAAAp//AOgMkYwtL2K8VytKjw24S49P5Yqp+pHX+ympxXXYnv60fbdP7fkovRwlTB2qgAAAAAAAA2C1l3uC+5HsPPrjrS8i5HXlnUzDCqYSUyMIwmpkYY4SUzHDHCamRMIwkpkYYzCSmRMIw2zRtYutlCEmuJQjKvLm1vFguvGWP4Tx9tXfd6aY76t37t7Ztrp34nw3rmONdKAAAAAAAAAAADps8MiK/sLi0eCdSn3tv0a0XrU31ayWPRibeh1U6XUUXo7p38u9jVT0ow8qVqUoSlCcXGcJOEotYOMk8GmufFH1eiqK6Yqp4TvaaBkAAAAAAAO5t5cSPsrsNKqN8vMrjrSzKRjhXhJTIwxwmpkYRhLXMcIwmpEYY4SUiMMcJqZEwjC5dFmSOBsuHksKl01UWO9UViqa+eMpfiRxO29R73UdCOFG779/p9nv7Os+7tdKeNTdDx2+AAAAAAAAAAAABQmm7Nfue7V/Tj3m7lhUw3QuksX+pJvrUjvPZnaHvbU6ertUcPrT/Ho1rtOJz4qzOoVAAAAAAAO0oS4sfZXYatXGWhXHWlkUiMK8JKRiiYSUhhGElIxwxwmpkTCMJRmRhjMO9zOyJK/vKdDB8Gu+V5L0aMXt287xUV19B5+0tXGlsTX38I5/3eu09j3tcQ9C04KKUYpKKSiklgkluSPnszMzmXQxGEiEgAAAAAAAAAAAAddnDkalfWtW1rLiVYauKw1oS3xnHpTSfyL9Lqa9Ndpu0caf7hExmMS8s5fyNWsrqra144Tpywx9GcPRnH7rW0+p6PV29VZi7b4T+k98fZpzExOJdebSAAAAAAOfSlxV1Ioq4tOqN8sikY4YYfVIjCJhJSIwjCSkMMcJKRiiYThi2oxTbbUYpLFuTeCSXK8SKpimMyRTng9A6Pc2O4LTjpd01sKld79V4cWknzLF/Ns+ebV186u9mOzTuj1+72tNZ91T9Z4tpPMbAAAAAAAAAAAAAAABpOk7MiOU7dTpJK9oRfAy3KpHe6Mnzc3M+tns7G2rOhu4q7FXH6fX18VdyjpQ84VqUoSlCcXCcJOE4STjKMk8HFp7nij6TTVTVTFVM5iWqiZAAAAAOVCWxdRXMb2vMb01IxwwwkpEYRMJawwjCSkY4Y4fVIYRMLd0TZltauUbmGDa1rSlJbUmvLyXP6vRt5Vhxu3tqRVnTWp3f/U/t6vQ0unx15Wscs3gAAAAAAAAAAAAAAAAArfSjo7V9F3dpFRvYx48NijcxS2J81TDYny7nyNdFsTbU6Sfc3t9E/8An+PGFNy3nfCgqlOUZOMouMotxlGSalGSeDTT3PE+gU1RVETTOYlromQAAAGWMthjhXPFNSIwwwkpEImH3WIwjCWsMMcLO0Y6PncOF7e08LdYToUJrbXfJOaf2fMvS6vG5Pbe2otxNixPW758PpH18ufDbs6fpdapdhxjeAAAAAAAAAAAAAAAAAAAA0LSJo4o5RTr0NWjfJePhhTr4LZGphy8ilv5Hjye5snbdzRzFuvrW/Dvjl6Krlvpc3n/ACnk2va1pULijKjVg8JQmtvQ09zXM1sZ9Csai3foi5anMS198bpcUuQAAPuIQ+qQwxwkpEYRMJwxbUUm3JqMUli23uSS3sxqmKYzPCEYXFo60XNat3lKmsVhKjZywaXNKsuV/d/PmXF7X9oOlmzpZ3d9X7R6tm1YxvqW8jkm0AAAAAAAAAAAAAAAAAAAAAAdHnVmpaZSpcHc0+NFPg60MFWpN+rLm6HsZuaHX39HX0rU847p5saqYq4qDzz0e3uTW5uPdFryXFKLwiv9yG1w7Ok7/Z229PrI6PZr8J/bx82tVRNLUD2WAACJgCHc5s5r3mUanB2tFySeE6ssY0aftz59u5YvoNHW7R0+jp6V2rlHfP2Z00TVwXzmPo6tMmpVZYXF3y15xWFPZg1Sj6PXve3qOB2ltq/rerHVo8PHn4tmi1FLdTx1gAAAAAAAAAAAAAAAAAAAAAAAAfJRTWDWKexp7mgK6zt0S2V05VbV9xV3tajHG3m+mn6G70cF0M6HQe0Wo0+KLvXp+vGPv6qqrMTw3KdzlzNv8nt90W74PHBV6fHoPm468XfulgzsdFtbS6uPh1b/AAndP95KKqZp4uBkbIl3eVODtbapXly6keLH25vixXW0bGp1ljTU9K9VEef2jiximauC2c09DMI4Vco1eEe/uag2qfVOpsb6o4bt7OS1/tRXXmnTRiP9p4/aOEffK6mz/steys6VCnGlRpQpU4LCMKcVGKXQkcrcuV3KpqrnMz3y2IjDOYAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5KKaaaTTWDT2prmAxWtrTpRUKVOFOC3QpwjCK+S2GVVdVc5qmZn6jMYgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/Z",
  },
  {
    id: "bitget",
    title: "Bitget",
    img: "data:image/jpeg;base64,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",
  },
  {
    id: "Tether",
    title: "Tether",
    img: "https://assets.coingecko.com/coins/images/325/standard/Tether.png?1696501661",
  },
  {
    id: "XRP",
    title: "XRP",
    img: "https://assets.coingecko.com/coins/images/44/standard/xrp-symbol-white-128.png?1696501442",
  },
  {
    id: "BNB",
    title: "BNB",
    img: "https://assets.coingecko.com/coins/images/825/standard/bnb-icon2_2x.png?1696501970",
  },
  {
    id: "Solana",
    title: "Solana",
    img: "https://assets.coingecko.com/coins/images/4128/standard/solana.png?1718769756",
  },
  {
    id: "USDC",
    title: "USDC",
    img: "https://assets.coingecko.com/coins/images/6319/standard/usdc.png?1696506694",
  },
  {
    id: "TRON",
    title: "TRON",
    img: "https://assets.coingecko.com/coins/images/1094/standard/tron-logo.png?1696502193",
  },
  {
    id: "Cardano",
    title: "Cardano",
    img: "https://assets.coingecko.com/coins/images/975/standard/cardano.png?1696502090",
  },
  {
    id: "Lido",
    title: "Lido Staked Ether",
    img: "https://assets.coingecko.com/coins/images/13442/standard/steth_logo.png?1696513206",
  },
  {
    id: "Wrapped-Bitcoin",
    title: "Wrapped Bitcoin",
    img: "https://assets.coingecko.com/coins/images/7598/standard/wrapped_bitcoin_wbtc.png?1696507857",
  },
  {
    id: "Leo",
    title: "LEO Token",
    img: "https://assets.coingecko.com/coins/images/8418/standard/leo-token.png?1696508607",
  },
  {
    id: "Avalanche",
    title: "Avalanche",
    img: "https://assets.coingecko.com/coins/images/12559/standard/Avalanche_Circle_RedWhite_Trans.png?1696512369",
  },
  {
    id: "Chainlink",
    title: "Chainlink",
    img: "https://assets.coingecko.com/coins/images/877/standard/chainlink-new-logo.png?1696502009",
  },
  {
    id: "Stellar",
    title: "Stellar",
    img: "https://assets.coingecko.com/coins/images/100/standard/fmpFRHHQ_400x400.jpg?1735231350",
  },
  {
    id: "Toncoin",
    title: "Toncoin",
    img: "https://assets.coingecko.com/coins/images/17980/standard/photo_2024-09-10_17.09.00.jpeg?1725963446",
  },
  {
    id: "USDS",
    title: "USDS",
    img: "https://assets.coingecko.com/coins/images/39926/standard/usds.webp?1726666683",
  },
  {
    id: "Shiba",
    title: "Shiba Inu",
    img: "https://assets.coingecko.com/coins/images/11939/standard/shiba.png?1696511800",
  },
  {
    id: "Sui",
    title: "Sui",
    img: "https://assets.coingecko.com/coins/images/26375/standard/sui-ocean-square.png?1727791290",
  },
  {
    id: "Hedera",
    title: "Hedera",
    img: "https://assets.coingecko.com/coins/images/3688/standard/hbar.png?1696504364",
  },
  {
    id: "Wrapped-stETH",
    title: "Wrapped stETH",
    img: "https://assets.coingecko.com/coins/images/18834/standard/wstETH.png?1696518295",
  },
  {
    id: "Bitcoin-cash",
    title: "Bitcoin Cash",
    img: "https://assets.coingecko.com/coins/images/780/standard/bitcoin-cash-circle.png?1696501932",
  },
  {
    id: "Hyperliquid",
    title: "Hyperliquid",
    img: "https://assets.coingecko.com/coins/images/50882/standard/hyperliquid.jpg?1729431300",
  },
  {
    id: "Litecoin",
    title: "Litecoin",
    img: "https://assets.coingecko.com/coins/images/2/standard/litecoin.png?1696501450",
  },
  {
    id: "Toncoin",
    title: "Toncoin",
    img: "https://assets.coingecko.com/coins/images/17980/standard/photo_2024-09-10_17.09.00.jpeg?1725963446",
  },
  {
    id: "Mantle",
    title: "Mantle",
    img: "https://assets.coingecko.com/coins/images/30980/standard/Mantle-Logo-mark.png?1739213200",
  },
  {
    id: "Polkadot",
    title: "Polkadot",
    img: "https://static.coingecko.com/s/polkadot-73b0c058cae10a2f076a82dcade5cbe38601fad05d5e6211188f09eb96fa4617.gif",
  },
  {
    id: "Bitget",
    title: "Bitget Token",
    img: "https://assets.coingecko.com/coins/images/11610/standard/Bitget_logo.png?1736925727",
  },
  {
    id: "Ethena",
    title: "USDe",
    img: "https://assets.coingecko.com/coins/images/33613/standard/usde.png?1733810059",
  },
  {
    id: "Weth",
    title: "WETH",
    img: "https://assets.coingecko.com/coins/images/2518/standard/weth.png?1696503332",
  },
  {
    id: "Pi",
    title: "Pi Network",
    img: "https://assets.coingecko.com/coins/images/54342/standard/pi_network.jpg?1739347576",
  },
  {
    id: "Whitebit",
    title: "Whitebit Coin",
    img: "https://assets.coingecko.com/coins/images/27045/standard/wbt_token.png?1696526096",
  },
  {
    id: "Monero",
    title: "Monero",
    img: "https://assets.coingecko.com/coins/images/69/standard/monero_logo.png?1696501460",
  },
  {
    id: "Wrapped-eeth",
    title: "Wrapped eETH",
    img: "https://assets.coingecko.com/coins/images/33033/standard/weETH.png?1701438396",
  },
  {
    id: "Coinbase-Wrapped-BTC",
    title: "Coinbase Wrapped BTC",
    img: "https://assets.coingecko.com/coins/images/40143/standard/cbbtc.webp?1726136727",
  },
  {
    id: "Pepe",
    title: "Pepe",
    img: "https://assets.coingecko.com/coins/images/29850/standard/pepe-token.jpeg?1696528776",
  },
  {
    id: "Uniswap",
    title: "Uniswap",
    img: "https://assets.coingecko.com/coins/images/12504/standard/uniswap-logo.png?1720676669",
  },
  {
    id: "Dai",
    title: "Dai",
    img: "https://assets.coingecko.com/coins/images/9956/standard/Badge_Dai.png?1696509996",
  },
  {
    id: "OKB",
    title: "OKB",
    img: "https://assets.coingecko.com/coins/images/4463/standard/WeChat_Image_20220118095654.png?1696505053",
  },
  {
    id: "Aptos",
    title: "Aptos",
    img: "https://assets.coingecko.com/coins/images/26455/standard/aptos_round.png?1696525528",
  },
  {
    id: "Gate",
    title: "Gate",
    img: "https://assets.coingecko.com/coins/images/8183/standard/200X200.png?1735246724",
  },
  {
    id: "Bittensor",
    title: "Bittensor",
    img: "https://assets.coingecko.com/coins/images/28452/standard/ARUsPeNQ_400x400.jpeg?1696527447",
  },
  {
    id: "Ondo",
    title: "Ondo",
    img: "https://assets.coingecko.com/coins/images/26580/standard/ONDO.png?1696525656",
  },
  {
    id: "Near-protocol",
    title: "Near Protocol",
    img: "https://assets.coingecko.com/coins/images/10365/standard/near.jpg?1696510367",
  },
  {
    id: "Tokenized-xchange",
    title: "Tokenized Xchange",
    img: "https://assets.coingecko.com/coins/images/4984/standard/TKX_-_Logo_-_RGB-15.png?1696505519",
  },
  {
    id: "sUSDS",
    title: "sUSDS",
    img: "https://assets.coingecko.com/coins/images/52721/standard/sUSDS_Coin.png?1734086971",
  },
  {
    id: "internet-computer",
    title: "Internet Computer",
    img: "https://assets.coingecko.com/coins/images/14495/standard/Internet_Computer_logo.png?1696514180",
  },
  {
    id: "Kaspa",
    title: "Kaspa",
    img: "https://assets.coingecko.com/coins/images/25751/standard/kaspa-icon-exchanges.png?1696524837",
  },
  {
    id: "Ethereum-classic",
    title: "Ethereum Classic",
    img: "https://assets.coingecko.com/coins/images/453/standard/ethereum-classic-logo.png?1696501628",
  },
  {
    id: "Render",
    title: "Render Token",
    img: "https://assets.coingecko.com/coins/images/11636/standard/rndr.png?1696511529",
  },
  {
    id: "Cronos",
    title: "Cronos",
    img: "https://assets.coingecko.com/coins/images/7310/standard/cro_token_logo.png?1696507599",
  },
  {
    id: "Mantle",
    title: "Mantle",
    img: "https://assets.coingecko.com/coins/images/30980/standard/Mantle-Logo-mark.png?1739213200",
  },
  {
    id: "Aave",
    title: "Aave",
    img: "https://assets.coingecko.com/coins/images/12645/standard/aave-token-round.png?1720472354",
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];
