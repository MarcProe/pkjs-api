/* eslint-disable no-unused-expressions */
import {Client, expect} from '@loopback/testlab';
import {PkjsApiApplication} from '../..';
import {setupApplication} from './test-helper';
import config from 'config';
import util from 'util';

describe('HomePage', () => {
  let app: PkjsApiApplication;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let client: Client;

  before('setupApplication', async () => {
    ({app, client} = await setupApplication());
  });

  after(async () => {
    await app.stop();
  });

  it('has a config', async () => {
    const conf = config.get('conf');
    expect(conf).to.not.be.null;
    expect(conf).to.not.be.undefined;
  });

  it('dumped the config', async () => {
    const conf = config.get('conf');
    console.log(util.inspect(conf, false, 2, true));
  });
});
