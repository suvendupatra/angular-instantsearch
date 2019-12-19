import { NgAisIndex } from '../index-widget';
import { createRenderer } from '../../../helpers/test-renderer';

jest.mock('../../../src/base-widget');

const render = createRenderer({
  template: '<ais-index indexName="test-index"></ais-index>',
  TestedWidget: NgAisIndex,
});

describe('Index', () => {
  it('passes indexName to widget', () => {
    const fixture = render();
    expect(fixture).toMatchInlineSnapshot();
  });
  it('passes indexId to widget', () => {});
});
