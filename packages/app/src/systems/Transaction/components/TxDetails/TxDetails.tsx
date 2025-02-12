import { cssObj } from '@fuel-ui/css';
import { Card, Text } from '@fuel-ui/react';
import type { BN } from 'fuels';
import { bn } from 'fuels';
import type { FC } from 'react';

import { TxDetailsLoader } from './TxDetailsLoader';

export type TxDetailsProps = {
  fee?: BN;
};

type TxDetailsComponent = FC<TxDetailsProps> & {
  Loader: typeof TxDetailsLoader;
};

export const TxDetails: TxDetailsComponent = ({
  fee: initialFee,
}: TxDetailsProps) => {
  const fee = bn(initialFee);

  return (
    <Card css={styles.detailItem}>
      <Text color="intentsBase10" css={styles.text}>
        Fee (network)
      </Text>
      <Text color="intentsBase12" css={styles.text} aria-label="Fee Value">
        {fee?.format()} ETH
      </Text>
    </Card>
  );
};

const styles = {
  detailItem: cssObj({
    padding: '$3',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }),
  text: cssObj({
    fontSize: '$sm',
    fontWeight: '$normal',
  }),
};

TxDetails.Loader = TxDetailsLoader;
