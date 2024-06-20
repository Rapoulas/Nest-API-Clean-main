import { UserDataBuilder } from "@/users/domain/testing/helpers/user-data-builder";
import { UserEntity, UserProps } from "../../user.entity";
import { EntityValidationError } from "@/shared/erros/validation-error";


let props: UserProps


describe('UserEntity integration tests', () => {
  beforeEach(() => {
    props = UserDataBuilder({})
  })

  describe('Contructor method', () => {

    it('Should thron an error when creating a user with invalid name - error', () => {
      const valid: UserProps= {
        ...props,
        name: '' as any
      }
      expect(() => new UserEntity(valid)).toThrow(EntityValidationError)
    })

    it('Should thron an error when creating a user with invalid name - empty', () => {
      const valid: UserProps= {
        ...props,
        name: null as any
      }
      expect(() => new UserEntity(valid)).toThrow(EntityValidationError)
    })

    it('Should thron an error when creating a user with invalid name - large', () => {
      const valid: UserProps= {
        ...props,
        name: 'a'.repeat(256) as any
      }
      expect(() => new UserEntity(valid)).toThrow(EntityValidationError)
    })
  })
})