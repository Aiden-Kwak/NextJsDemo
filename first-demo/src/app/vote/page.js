import VoteForm from "@/features/vote/voteForm";

export default async function VotePage() {
    const res = await fetch('http://localhost:8000/api/vote/get-vote', { cache: 'no-store' });
    const data = await res.json();

    return (
        <div>
            <h1>Vote for Biden or Trump!</h1>
            <VoteForm initialBidenCount={data.biden_count} initialTrumpCount={data.trump_count} />
        </div>
    );
}
