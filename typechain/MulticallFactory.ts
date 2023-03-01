/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Multicall } from "./Multicall";

export class MulticallFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Multicall> {
    return super.deploy(overrides || {}) as Promise<Multicall>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Multicall {
    return super.attach(address) as Multicall;
  }
  connect(signer: Signer): MulticallFactory {
    return super.connect(signer) as MulticallFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Multicall {
    return new Contract(address, _abi, signerOrProvider) as Multicall;
  }
}

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
        ],
        internalType: "struct Multicall.Call[]",
        name: "calls",
        type: "tuple[]",
      },
    ],
    name: "aggregate",
    outputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
      {
        internalType: "bytes[]",
        name: "returnData",
        type: "bytes[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getBlockHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockCoinbase",
    outputs: [
      {
        internalType: "address",
        name: "coinbase",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockDifficulty",
    outputs: [
      {
        internalType: "uint256",
        name: "difficulty",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockGasLimit",
    outputs: [
      {
        internalType: "uint256",
        name: "gaslimit",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "timestamp",
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
        name: "addr",
        type: "address",
      },
    ],
    name: "getEthBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLastBlockHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506105ff806100206000396000f3fe608060405234801561001057600080fd5b50600436106100785760003560e01c80630f28c97d1461007d578063252dba421461009b57806327e86d6e146100bc5780634d2301cc146100c457806372425d9d146100d757806386d516e8146100df578063a8b0574e146100e7578063ee82ac5e146100fc575b600080fd5b61008561010f565b6040516100929190610488565b60405180910390f35b6100ae6100a93660046102f8565b610113565b604051610092929190610491565b61008561028b565b6100856100d23660046102d7565b61029e565b6100856102ab565b6100856102af565b6100ef6102b3565b6040516100929190610474565b61008561010a366004610440565b6102b7565b4290565b8051439060609067ffffffffffffffff81111561014057634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561017357816020015b606081526020019060019003908161015e5790505b50905060005b8351811015610285576000808583815181106101a557634e487b7160e01b600052603260045260246000fd5b6020026020010151600001516001600160a01b03168684815181106101da57634e487b7160e01b600052603260045260246000fd5b6020026020010151602001516040516101f39190610458565b6000604051808303816000865af19150503d8060008114610230576040519150601f19603f3d011682016040523d82523d6000602084013e610235565b606091505b50915091508161024457600080fd5b8084848151811061026557634e487b7160e01b600052603260045260246000fd5b60200260200101819052505050808061027d90610582565b915050610179565b50915091565b600061029860014361053b565b40905090565b6001600160a01b03163190565b4490565b4590565b4190565b4090565b80356001600160a01b03811681146102d257600080fd5b919050565b6000602082840312156102e8578081fd5b6102f1826102bb565b9392505050565b6000602080838503121561030a578182fd5b67ffffffffffffffff8084351115610320578283fd5b8335840185601f820112610332578384fd5b803582811115610344576103446105b3565b6103518485830201610511565b81815284810190838601875b848110156104315781358601601f196040828e038201121561037d578a8bfd5b604051604081018181108b82111715610398576103986105b3565b6040526103a6838c016102bb565b815260408301358a8111156103b9578c8dfd5b8084019350508d603f8401126103cd578b8cfd5b8a8301358a8111156103e1576103e16105b3565b6103f18c84601f84011601610511565b92508083528e6040828601011115610407578c8dfd5b80604085018d85013782018b018c9052808b0191909152855250928701929087019060010161035d565b50909998505050505050505050565b600060208284031215610451578081fd5b5035919050565b6000825161046a818460208701610552565b9190910192915050565b6001600160a01b0391909116815260200190565b90815260200190565b600060408201848352602060408185015281855180845260608601915060608382028701019350828701855b8281101561050357878603605f19018452815180518088526104e481888a01898501610552565b601f01601f1916969096018501955092840192908401906001016104bd565b509398975050505050505050565b60405181810167ffffffffffffffff81118282101715610533576105336105b3565b604052919050565b60008282101561054d5761054d61059d565b500390565b60005b8381101561056d578181015183820152602001610555565b8381111561057c576000848401525b50505050565b60006000198214156105965761059661059d565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220043e899fcf2359f1f24be05f500ea7aac6f0574037fc31f6202d7eb41801bd4164736f6c63430008000033";