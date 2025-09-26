import "./App.css";
import Container from "./Component/Container";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import StatsSection from "./Component/StatsSection";
import TicketCard from "./Component/TicketCard";

function App() {
  const data = {
    id: 9,
    title: "UI Bug in Dashboard",
    description: "Statistics panel overlaps navigation menu.",
    customer: "William Johnson",
    priority: "Low",
    status: "Resolved",
    createdAt: "2025-09-18T07:15:00Z",
  };
  return (
    <>
      <div className="sticky top-0 z-50 bg-base-100 shadow-sm ">
        <Container>
          <Navbar />
        </Container>
      </div>
      <div >
        <Container>
          <StatsSection />
          
        </Container>
      </div>

      <div>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 my-8">
            {/* ------------ left ------------- */}
            <div className="col-span-1 md:col-span-9 ">
              <h1 className="text-[#34485A] font-bold text-xl">Customer Tickets</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-3">
                <TicketCard data={data} />
                <TicketCard data={data} />
                <TicketCard data={data} />
                <TicketCard data={data} />
              </div>
            </div>
            {/* ----------------- Right ------------------ */}
            <div className="col-span-1 md:col-span-3  rounded-lg h-fit">
              <h1 className="text-[#34485A] font-bold text-xl">Task Status</h1>
              <div className="mb-6 py-4">
                <p>Select a ticket to add to Task Status</p>
              </div>
              <h1 className="text-[#34485A] font-bold text-xl">Resolved Task</h1>
              <div className="py-4">
                <p>No resolved tasks yet.</p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Footer />
    </>
  );
}

export default App;
