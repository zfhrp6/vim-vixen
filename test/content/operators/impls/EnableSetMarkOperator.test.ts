import { expect } from "chai";
import EnableSetMarkOperator from "../../../../src/content/operators/impls/EnableSetMarkOperator";
import MockMarkKeyRepository from "../../mock/MockMarkKeyRepository";

describe("EnableSetMarkOperator", () => {
  describe("#run", () => {
    it("returns an operator", async () => {
      const repository = new MockMarkKeyRepository({
        jumpMode: false,
        setMode: false,
      });
      const sut = new EnableSetMarkOperator(repository);

      await sut.run();

      expect(repository.setMode).to.be.true;
    });
  });
});
