import { types } from "mobx-state-tree";

export const PageModel = types
  .model("PageModel", {
    currentSection: 0
  })
  .actions((self) => ({
    setCurrentSection(n) {
      self.currentSection = n;
    },

    afterCreate() {}
  }))
  .views((self) => {
    return {
      getNodeById: (id) => {
        return id;
      }
    };
  });
