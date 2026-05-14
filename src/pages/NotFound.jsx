import ErrorPage from "./ErrorPage";

export default function NotFound() {
  return (
    <ErrorPage
      code="404"
      description="Page Not Found"
      image="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
    />
  );
}