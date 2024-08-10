import { fakerKO as faker } from "@faker-js/faker";

export const fullname = () => {
  return `${faker.person.lastName()}${faker.person.firstName()}`;
};

export const randomNumber = (max: number) => {
  return faker.number.int(max);
};

export const imageUrl = () => {
  return faker.image.avatar();
};

export const paragraph = () => {
  return faker.lorem.paragraph();
};

export const boolean = () => {
  return faker.datatype.boolean();
};

export const local = () => {
  return `${faker.location.city()} ${faker.location.secondaryAddress()}`;
};

export const rating = () => {
  return faker.number.float({ min: 0, max: 5, precision: 0.1 });
};
