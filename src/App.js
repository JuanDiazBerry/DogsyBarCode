
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Barcode } from './BarcodeView';


function App() {
// Create a client
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Barcode></Barcode>
    </QueryClientProvider>
  );
}

export default App;
