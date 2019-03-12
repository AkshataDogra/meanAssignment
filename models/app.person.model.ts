export class Person {

  constructor(
      public PersonalUniqueID: string,
      public FullName: object,
      public Gender: string,
      public DateOfBirth: string,
      public Age: string,
      public Address: object,
      public City: string,
      public State: string,
      public PinCode: string,
      public PhoneNo: string,
      public MobileNo: string,
      public PhysicalDisability: string,
      public MaritalStatus: string,
      public EducationStatus: string,
      public BirthSign: string,
  ) {}
}

export const Genders = ['Male', 'Female', 'Third Gender'];
export const Disability = ['NO', 'YES'];
export const MStatus = ['Unmarried', 'Married', 'Divorced', 'Widow', 'Widower'];
export const EStatus = ['Masters', 'Phd', 'Graduate', 'Under-Graduate', 'HSC', 'SSC', 'Illiterate'];
