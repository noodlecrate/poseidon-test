/// <reference path="../../../typings/index.d.ts" />

import { Expect, TestCase } from 'alsatian';
const Poseidon = require('noodlecrate-poseidon'); // todo: fix this with poseidon typings
import { Builders as EntityBuilders } from 'noodlecrate-poseidon-entities';

const BrandSerializer = Poseidon.Serializers.BrandSerializer;

export class BrandSerializerSerializeTestFixture {

    @TestCase(1)
    @TestCase(17)
    @TestCase(204)
    public serializesIdFromModelToDto(id: number) {
        let model = new EntityBuilders.ModelBuilders.BrandModelBuilder().withId(id).build();
        let serializer = new BrandSerializer();

        let dto = serializer.serialize(model);

        Expect(dto.id).toBe(id);
    }

    @TestCase('Pot Noodle')
    @TestCase('Chilli Noodle')
    @TestCase('JavaScript Noodles')
    public serializesNameFromModelToDto(brandName: string) {
        let model = new EntityBuilders.ModelBuilders.BrandModelBuilder().withName(brandName).build();
        let serializer = new BrandSerializer();

        let dto = serializer.serialize(model);

        Expect(dto.name).toBe(brandName);
    }

}
