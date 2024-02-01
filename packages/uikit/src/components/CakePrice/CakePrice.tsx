import React from "react";
import styled from "styled-components";
import LogoRound from "../Svg/Icons/LogoRound";
import Text from "../Text/Text";
import Skeleton from "../Skeleton/Skeleton";
import { Colors } from "../../theme";

export interface Props {
  color?: keyof Colors;
  zodiacPriceUsd?: number;
  showSkeleton?: boolean;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const CakePrice: React.FC<React.PropsWithChildren<Props>> = ({
  zodiacPriceUsd,
  color = "textSubtle",
  showSkeleton = true,
}) => {
  return zodiacPriceUsd ? (
    <PriceLink
      href="/swap?chain=areonTestnet&outputCurrency=0x828a9CA1347B3b3525FD94700B78bB048dB1eF8B"
      target="_blank"
    >
      <img src='/images/zodiac.png ' style={{ width: "38px", height: "38px" }} />
      <Text color={color} bold>{`$${zodiacPriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : showSkeleton ? (
    <Skeleton width={80} height={24} />
  ) : null;
};

export default React.memo(CakePrice);
