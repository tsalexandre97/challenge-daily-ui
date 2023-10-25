import FormSubscription from './components/FormSubscription'

export default function Home() {
  return (
    <main className="flex flex-col bg-white px-10 py-20 max-w-[90vh] shadow-xl rounded-lg">
      <h1 className="text-4xl w-full font-bold text-[#424242]">Subscribe newsletter</h1>
      <p className="mb-6 text-sm">Receive updates directly to your WhatsApp or email. Our posts go live every Monday from 9am.</p>
      <FormSubscription />
    </main>
  )
}
