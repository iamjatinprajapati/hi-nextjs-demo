import CategoriesSWR from "@/components/categoriesSWR";

const Company = () => {
  return (
    <div className="mx-auto max-w-7xl py-24">
      <h1 className="text-3xl font-bold">Company</h1>
      <p className="mt-2">
        This is static generation which depends on external data.
      </p>
      <CategoriesSWR />
    </div>
  );
};

export default Company;
