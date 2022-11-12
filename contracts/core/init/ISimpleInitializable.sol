// SPDX-License-Identifier: MIT

pragma solidity ^0.8.16;

import {IInitializable} from "./IInitializable.sol";

interface ISimpleInitializable is IInitializable {
    function initialize() external;
}
