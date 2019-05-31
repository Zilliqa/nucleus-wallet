/**
 * This file is part of nucleus-wallet.
 * Copyright (c) 2018 - present Zilliqa Research Pte. Ltd.
 *
 * nucleus-wallet is free software: you can redistribute it and/or modify it under the
 * terms of the GNU General Public License as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option) any later
 * version.
 *
 * nucleus-wallet is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE.  See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with
 * nucleus-wallet.  If not, see <http://www.gnu.org/licenses/>.
 */

const getHost = (host: string) => {
  switch (host) {
    default:
      return 'https://us-central1-nucleus-wallet.cloudfunctions.net';
  }
};

export const HOST = getHost(window.location.hostname);

export const getErrorStatus = (error): number => {
  const { request } = error;
  const { status } = request;
  return status;
};

export const getExplorerURL = (txId) => `https://viewblock.io/zilliqa/tx/${txId}?network=testnet`;
