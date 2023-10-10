import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import App from "./App"
import { HashRouter } from "react-router-dom";

const queryClient = new QueryClient()
export const Main = () => {
    return (
        <HashRouter>
            <QueryClientProvider client={queryClient}>
                <App />
            </QueryClientProvider>
        </HashRouter>
    )
}