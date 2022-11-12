import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { getDeployContractData } from '../../../utils/deploy';
import { beginTask } from '../../../utils/format';
import { operation } from '../../../utils/operation';

type ProtocolGasVendorDeployArgs = {
  vendor: string;
  dry: boolean;
  nonce?: string;
};

export const protocolGasVendorDeploy = async (
  args: ProtocolGasVendorDeployArgs,
  env: HardhatRuntimeEnvironment,
): Promise<void> => {
  beginTask();

  await operation({
    title: 'Deploy gas vendor protocol',
    env,
    mode: args.dry ? 'dry-run' : 'run',
    transaction: async () => {
      const data = await getDeployContractData({
        contractName: 'GasVendorProtocol',
        constructorParams: [args.vendor],
        env,
      });
      return { data };
    },
    nonce: args.nonce,
  });
};
