import { expect } from "chai";
import EnableJumpMarkOperator from "../../../../src/content/operators/impls/EnableJumpMarkOperator";
import MockMarkKeyRepository from "../../mock/MockMarkKeyRepository";

describe("EnableJumpMarkOperator", () => {
  describe("#run", () => {
    it("returns an operator", async () => {
      const repository = new MockMarkKeyRepository({
        jumpMode: false,
        setMode: false,
      });
      const sut = new EnableJumpMarkOperator(repository);

      await sut.run();

      expect(repository.jumpMode).to.be.true;
    });
  });
});
