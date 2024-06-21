import { UserDataBuilder } from "@/users/domain/testing/helpers/user-data-builder";
import { UserEntity, UserProps } from "../../user.entity";
import { EntityValidationError } from "@/shared/erros/validation-error";


let props: UserProps


describe('UserEntity integration tests', () => {
  beforeEach(() => {
    props = UserDataBuilder({})
  })

  describe('Contructor method', () => {

    it('Should throw an error when creating a user with invalid email - error', () => {
      const valid: UserProps= {
        ...props,
        email: '' as any
      }
      expect(() => new UserEntity(valid)).toThrow(EntityValidationError)
    })

    it('Should throw an error when creating a user with invalid email - error', () => {
      const valid: UserProps= {
        ...props,
        email: null as any
      }
      expect(() => new UserEntity(valid)).toThrow(EntityValidationError)
    })

    it('Should throw an error when creating a user with invalid email - empty', () => {
      const valid: UserProps= {
        ...props,
        email: 10 as any
      }
      expect(() => new UserEntity(valid)).toThrow(EntityValidationError)
    })

    it('Should throw an error when creating a user with invalid email - large', () => {
      const valid: UserProps= {
        ...props,
        email: 'a'.repeat(256) as any
      }
    })
    it('Should throw an error when creating a user with invalid password - error', () => {
      const valid: UserProps= {
        ...props,
        password: '' as any
      }
      expect(() => new UserEntity(valid)).toThrow(EntityValidationError)
    })

    it('Should throw an error when creating a user with invalid password - error', () => {
      const valid: UserProps= {
        ...props,
        password: null as any
      }
      expect(() => new UserEntity(valid)).toThrow(EntityValidationError)
    })

    it('Should throw an error when creating a user with invalid password - empty', () => {
      const valid: UserProps= {
        ...props,
        password: 10 as any
      }
      expect(() => new UserEntity(valid)).toThrow(EntityValidationError)
    })

    it('Should throw an error when creating a user with invalid password - large', () => {
      const valid: UserProps= {
        ...props,
        password: 'a'.repeat(256) as any
      }
    it('Should throw an error when creating a user with invalid name - error', () => {
      const valid: UserProps= {
        ...props,
        name: '' as any
      }
      expect(() => new UserEntity(valid)).toThrow(EntityValidationError)
    })

    it('Should throw an error when creating a user with invalid name - error', () => {
      const valid: UserProps= {
        ...props,
        name: null as any
      }
      expect(() => new UserEntity(valid)).toThrow(EntityValidationError)
    })

    it('Should throw an error when creating a user with invalid name - empty', () => {
      const valid: UserProps= {
        ...props,
        name: 10 as any
      }
      expect(() => new UserEntity(valid)).toThrow(EntityValidationError)
    })

    it('Should throw an error when creating a user with invalid createdAt - string', () => {
      const valid: UserProps= {
        ...props,
        createdAt: '2024' as any
      }
      expect(() => new UserEntity(valid)).toThrow(EntityValidationError)
    })

    it('Should throw an error when creating a user with invalid createdAt - number', () => {
      const valid: UserProps= {
        ...props,
        createdAt: 10 as any
      }
      expect(() => new UserEntity(valid)).toThrow(EntityValidationError)
    })

    it('Should throw an error when creating a user with invalid name - large', () => {
      const valid: UserProps= {
        ...props,
        name: 'a'.repeat(256) as any
      }})
      expect(() => new UserEntity(valid)).toThrow(EntityValidationError)
    })

    it('Should an valid User', () =>{
      expect.assertions
      const valid: UserProps = {
        ... props,
      }
      new UserEntity(valid)
    })

    describe('Update method', () => {
      it('Should throw an error when updating a user with invalid name - null', () => {
        const user =  new UserEntity(props)
        expect(() => user.update(null as any)).toThrow(EntityValidationError)
      })

    
    })

    describe('UpdatePassword method', () =>{
      it('Should throw an error when updating a user with invalid password - null', () => {
        const user =  new UserEntity(props)
        expect(() => user.update(null as any)).toThrow(EntityValidationError)
      })
      it('Should throw an error when updating a user with invalid password - null', () => {
        const user =  new UserEntity(props)
        expect(() => user.update('' as any)).toThrow(EntityValidationError)
      })
      it('Should throw an error when updating a user with invalid password - null', () => {
        const user =  new UserEntity(props)
        expect(() => user.update(10 as any)).toThrow(EntityValidationError)
      })
      it('Should throw an error when updating a user with invalid password - null', () => {
        const user =  new UserEntity(props)
        expect(() => user.update('a'.repeat(101) as any)).toThrow(EntityValidationError)
      })
      it('Should be a valid user', () =>{
        expect.assertions(0)
        const user = new UserEntity(props)
        user.updatePassword('new password')
      })
    })
  })
})