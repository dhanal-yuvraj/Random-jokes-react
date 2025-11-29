import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.username.trim()) {
    errors.username = "Username cannot be empty";
  }
  if (!values.remark.trim()) {
    errors.remark = "Remark cannot be empty";
  }
  if (!(values.rating >= 1 && values.rating <= 5)) {
    errors.rating = "Rating must be between 1 and 5";
  }
  return errors;
};

export default function CommentsForm({ addNewComment }) {
  const formik = useFormik({
    initialValues: {
      username: "",
      remark: "",
      rating: 5,
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      addNewComment(values);
      resetForm();
    },
  });

  return (
    <>
      <h4>Comments</h4>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.username && formik.errors.username && (
          <div style={{ color: "red" }}>{formik.errors.username}</div>
        )}

        <br /> <br />

        <textarea
          placeholder="add few remarks"
          value={formik.values.remark}
          name="remark"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        ></textarea>
        {formik.touched.remark && formik.errors.remark && (
          <div style={{ color: "red" }}>{formik.errors.remark}</div>
        )}

        <br /> <br />

        <input
          type="number"
          placeholder="ratings"
          min={1}
          max={5}
          value={formik.values.rating}
          name="rating"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.rating && formik.errors.rating && (
          <div style={{ color: "red" }}>{formik.errors.rating}</div>
        )}

        <br /> <br />

        <button type="submit">Add Comment</button>
      </form>
    </>
  );
}
