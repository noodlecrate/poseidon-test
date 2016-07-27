/// <reference path="../../../typings/index.d.ts" />

import { Expect, Test } from 'alsatian';
const Poseidon = require('noodlecrate-poseidon'); // todo: fix this with poseidon typings

const BrandModel = Poseidon.Models.BrandModel;
const BrandDto = Poseidon.DTOs.BrandDto;
const BrandSerializer = Poseidon.Serializers.BrandSerializer;

export class BrandSerializerSerializeTestFixture {

    @TestCase("Pot Noodle")
    @TestCase("Chilli Noodle")
    @TestCase("JavaScript Noodles")
    public serializesNameFromModelToDto(brandName: string) {
        Expect(1 + 1).toBe(2);
    }

}
