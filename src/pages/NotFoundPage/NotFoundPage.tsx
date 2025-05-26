export const NotFoundPage = () => {
  return (
    <div style={{marginTop: "auto", marginBottom: "auto"}}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <p>
        Go back to the <a href="/talents" className="text-blue-500 hover:underline">Talent Simulator</a> or <a href="/certificates" className="text-blue-500 hover:underline">Certificates</a> page.
      </p>
    </div>
  );
}