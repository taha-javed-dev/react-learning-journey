const Card = ({ children, title, color }) => {
 const colorClasses = {
    blue: "bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200",
    red: "bg-red-50 border border-red-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200",
    green: "bg-green-50 border border-green-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200"
  };
  

  return (
    <div className={`${colorClasses[color]}`}>
      {title && (
        <h3 className="text-xl font-bold mb-4 text-blue-400">{title}</h3>
      )}

      <div className="space-y-2 ">{children}</div>
    </div>
  );
};

const Container = ({ children, layout }) => {
 
  return (
    <div className=" ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4  ">
        <div className={`space-y-2`}>{children}</div>
      </div>
    </div>
  );
};

const ChildrenProps = () => {
  return (
    <div className="p-8 space-x-2 space-y-4 bg-white rounded-xl shadow-2xl">
      <h3 className="text-2xl ">Children props</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloribus quisquam ducimus obcaecati nam earum suscipit!</p>
      <Container>
        <Card title="User Info" color="blue">
          <p>
            <strong className="text-gray-800">Name:</strong> John Doe
          </p>
          <p>
            <strong className="text-gray-800">Email:</strong> johndoe@gmail.com
          </p>
          <p>
            <strong className="text-gray-800">Role:</strong> Developer
          </p>
        </Card>
        <Card title="User Info" color="green">
          <p>
            <strong className="text-gray-800">Name:</strong> Elon Musk
          </p>
          <p>
            <strong className="text-gray-800">Email:</strong> musk@gmail.com
          </p>
          <p>
            <strong className="text-gray-800">Role:</strong> Founder
          </p>
        </Card>
        <Card title="Warning" color="red">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe aliquid dolore deserunt quisquam pariatur totam? Saepe laboriosam voluptatem nemo ducimus asperiores dignissimos voluptates incidunt iusto?
          </p>
        </Card>
      </Container>
    </div>
  );
};

export default ChildrenProps;
