import { router } from "typera-express";
import { BranchController } from "../controllers/branches-controller";

export const branchRouts = router(
  BranchController.getRoles,
  BranchController.getBranches,
  BranchController.getBranch,
  BranchController.getEvents,
  BranchController.createBranch,
  BranchController.editBranch,
  BranchController.deleteBranch,
).handler();
