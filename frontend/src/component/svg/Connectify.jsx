const ConnectifySvg = (props) => (
  <svg
    width="200px"
    height="200px"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#1DA1F2", stopOpacity: "1" }} />
        <stop
          offset="100%"
          style={{ stopColor: "#0a74da", stopOpacity: "1" }}
        />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="45" fill="url(#grad1)" />
    <circle cx="50" cy="50" r="35" fill="#ffffff" />
    <circle cx="50" cy="50" r="30" fill="url(#grad1)" />
    <g fill="#ffffff">
      <circle cx="50" cy="20" r="4" />
      <circle cx="50" cy="80" r="4" />
      <circle cx="20" cy="50" r="4" />
      <circle cx="80" cy="50" r="4" />
    </g>
    <g stroke="#ffffff" strokeWidth="2" fill="none">
      <line x1="50" y1="24" x2="50" y2="76" />
      <line x1="24" y1="50" x2="76" y2="50" />
      <line x1="35" y1="35" x2="65" y2="65" />
      <line x1="35" y1="65" x2="65" y2="35" />
    </g>
  </svg>
);
export default ConnectifySvg;

//
