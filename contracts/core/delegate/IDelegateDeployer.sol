// SPDX-License-Identifier: MIT

pragma solidity ^0.8.16;

interface IDelegateDeployer {
    function predictDelegateDeploy(address account) external view returns (address);

    function deployDelegate(address account) external returns (address);

    function isDelegateDeployed(address account) external view returns (bool);
}
