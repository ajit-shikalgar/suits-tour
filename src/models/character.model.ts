import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    postgresql: {schema: 'suits', table: 'character_master'}
  }
})
export class Character extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
    postresql: {
      columnName: 'id'
    }
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    default: 'none',
  })
  description?: string;

  @property({
    type: 'string',
  })
  pic?: string;


  constructor(data?: Partial<Character>) {
    super(data);
  }
}

export interface CharacterRelations {
  // describe navigational properties here
}

export type CharacterWithRelations = Character & CharacterRelations;
