/// <reference path="../../../typings/index.d.ts" />

import { Expect, Test } from 'alsatian';
const Poseidon = require('noodlecrate-poseidon'); // todo: fix this with poseidon typings

export class BrandSerializerSerializeTestFixture {

    @Test()
    public exampleTest() {
        Expect(1 + 1).toBe(2);
    }

}
