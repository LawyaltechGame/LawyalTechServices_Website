type JsonLdProps = { data: Record<string, any> };

const JsonLd = ({ data }: JsonLdProps) => {
  const json = JSON.stringify(data);
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
};

export default JsonLd;


