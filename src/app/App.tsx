import { QueryClientProvider } from "../providers/QueryClientProvider";
import { MaterialUiProvider } from "../providers/MaterialUiProvider";

import { Characters } from "../pages/characters/Characters";
import { PageLayout } from "../components/layout/pageLayout/PageLayout";

const App = () => {
  return (
    <QueryClientProvider>
      <MaterialUiProvider>
        <PageLayout>
          <Characters />
        </PageLayout>
      </MaterialUiProvider>
    </QueryClientProvider>
  );
};

export default App;
