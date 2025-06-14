import { Star } from "lucide-react"
import { useState } from "react"
import { axiosInstance } from "@/lib/axiosInstance.js"

export const Reviews = ({ reviews, setReviews, productId }) => {
  const [writingReview, setWritingReview] = useState(false)
  const [newReview, setNewReview] = useState({
    starRating: 0,
    title: "",
    description: ""
  })

  // TODO: add reviews state

  const saveReview = async event => {
    event.preventDefault()

    const response = await axiosInstance.post(
      `/products/${productId}/review`,
      newReview
    )
    setReviews(response.data)
    setWritingReview(false)
  }

  const deleteReview = async reviewId => {
    const response = await axiosInstance.delete(
      `/products/${productId}/review/${reviewId}`
    )

    setReviews(response.data)
    setWritingReview(false)
  }

  const reviewElements = reviews.map((review, index) => (
    <div className="review" key={index}>
      <div className="star-container">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            fill={i < review.starRating ? "#fecd55" : "none"}
            stroke="#fecd55"
          />
        ))}
      </div>
      <p className="title">{review.title}</p>
      <p className="description">{review.description}</p>
      <button
        className="btn btn-danger"
        onClick={() => deleteReview(review._id)}
      >
        Delete
      </button>
    </div>
  ))

  return (
    <div>
      <div className="reviews-header">
        <h3>Product reviews</h3>
        {!writingReview && (
          <button
            onClick={() => setWritingReview(true)}
            className="btn btn-primary"
          >
            Write a review
          </button>
        )}
      </div>
      {writingReview ? (
        <form className="card review-form" onSubmit={saveReview}>
          <div className="form-group">
            <label htmlFor="rating">Rating</label>
            <div className="star-container">
              {Array.from({ length: 5 }).map((_, starIndex) => {
                return (
                  <button
                    key={starIndex}
                    type="button"
                    onClick={() =>
                      setNewReview({ ...newReview, starRating: starIndex + 1 })
                    }
                  >
                    <Star
                      stroke="#fecd55"
                      fill={
                        starIndex < newReview.starRating ? "#fecd55" : "none"
                      }
                    />
                  </button>
                )
              })}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="headline">Headline</label>
            <input
              type="text"
              id="headline"
              onChange={event =>
                setNewReview({ ...newReview, title: event.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Review</label>
            <textarea
              id="description"
              rows="3"
              onChange={event =>
                setNewReview({ ...newReview, description: event.target.value })
              }
            ></textarea>
          </div>
          <div className="btn-container">
            <button
              className="btn btn-outline"
              onClick={() => setWritingReview(false)}
            >
              Cancel
            </button>
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      ) : (
        <div className="reviews-container">{reviewElements}</div>
      )}
    </div>
  )
}
