import { QueryClientProvider } from "../providers/QueryClientProvider";
import { MaterialUiProvider } from "../providers/MaterialUiProvider";

import { Characters } from "../pages/characters/Characters";
import { PageLayout } from "../components/layout/pageLayout/PageLayout";
import { ModalProvider } from "../providers/ModalProvider";

const App = () => {
  return (
    <QueryClientProvider>
      <MaterialUiProvider>
        <PageLayout>
          <ModalProvider>
            <Characters />
          </ModalProvider>
        </PageLayout>
      </MaterialUiProvider>
    </QueryClientProvider>
  );
};

export default App;
