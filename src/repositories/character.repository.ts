import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LocalhostDbDataSource} from '../datasources';
import {Character, CharacterRelations} from '../models';

export class CharacterRepository extends DefaultCrudRepository<
  Character,
  typeof Character.prototype.id,
  CharacterRelations
> {
  constructor(
    @inject('datasources.localhostDB') dataSource: LocalhostDbDataSource,
  ) {
    super(Character, dataSource);
  }
}
