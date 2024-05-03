export default function ReviewDetail({
    params,
  }: {
    params: {
      reviewId: string;
    };
  }) {
    return (
      <>
        <h1>Reviews Details {params.reviewId}</h1>
      </>
    );
  }
  