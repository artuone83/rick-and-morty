import { Header } from "../layout/Header/Header";
import { Footer } from "../layout/Footer/Footer";
import { QueryClientProvider } from "../../providers/QueryClientProvider";
import { MaterialUiProvider } from "../../providers/MaterialUiProvider";
import { Main } from "../layout/Main/Main";
import { Characters } from "../../pages/Characters/Characters";

const App = () => {
  // const characters = useQuery({
  //   queryKey: ["characters"],
  //   queryFn: () => axios.get(`${BASE_URL}`),
  // });

  return (
    <QueryClientProvider>
      <MaterialUiProvider>
        <Header />
        <Main>
          <Characters />
        </Main>
        <Footer />
      </MaterialUiProvider>
    </QueryClientProvider>
  );
};

export default App;
