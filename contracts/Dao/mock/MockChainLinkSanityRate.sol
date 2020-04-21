pragma solidity 0.5.11;

import "../ISanityRate.sol";


contract MockChainLinkSanityRate is ISanityRate {
    uint256 latestAnswerValue;

    function setLatestKncToEthRate(uint256 _kncEthRate) external {
        latestAnswerValue = _kncEthRate;
    }

    function latestAnswer() external view returns (uint256) {
        return latestAnswerValue;
    }
}
