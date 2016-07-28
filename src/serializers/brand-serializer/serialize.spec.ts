/// <reference path="../../../typings/index.d.ts" />

import { Expect, TestCase } from 'alsatian';
const Poseidon = require('noodlecrate-poseidon'); // todo: fix this with poseidon typings
const PoseidonBuilders = require('noodlecrate-poseidon-builders');

const BrandSerializer = Poseidon.Serializers.BrandSerializer;

const BrandModelBuilder = PoseidonBuilders.Models.BrandModelBuilder;

export class BrandSerializerSerializeTestFixture {

    @TestCase(1)
    @TestCase(17)
    @TestCase(204)
    public serializesIdFromModelToDto(id: number) {
        let model = new BrandModelBuilder().withId(id).build();
        let serializer = new BrandSerializer();

        let dto = serializer.serialize(model);

        Expect(dto.id).toBe(id);
    }

    @TestCase('Pot Noodle')
    @TestCase('Chilli Noodle')
    @TestCase('JavaScript Noodles')
    public serializesNameFromModelToDto(brandName: string) {
        let model = new BrandModelBuilder().withName(brandName).build();
        let serializer = new BrandSerializer();

        let dto = serializer.serialize(model);

        Expect(dto.name).toBe(brandName);
    }

}
