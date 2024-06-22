import { QueryClientProvider } from 'providers/QueryClientProvider';
import { MaterialUiProvider } from 'providers/MaterialUiProvider';

import { Characters } from 'pages/tempCharacters/Characters';
import { PageLayout } from 'components/layout/tempPageLayout/PageLayout';

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
