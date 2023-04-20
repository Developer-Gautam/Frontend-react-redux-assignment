import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { updateProduct } from "../store/action";
import Editor from "../components/Editor";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import { getTRLList } from "../api";

const ProductEdit = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [trlList, setTrlList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    title: "",
    type: "",
    description: "",
    categories: "",
    businessModels: "",
    trl: "",
    investmentEffort: "",
    cost: "",
    videoUrl: "",
  });

  useEffect(() => {
    fetchProduct();
    fetchTrlList();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await fetch(`/api/product/${productId}/`);
      const data = await response.json();
      setProduct(data);
      setForm({
        title: data.title,
        type: data.type,
        description: data.description,
        categories: data.categories.join(", "),
        businessModels: data.businessModels.join(", "),
        trl: data.trl,
        investmentEffort: data.investmentEffort,
        cost: data.cost,
        videoUrl: data.videoUrl,
      });
      setLoading(false);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch product.");
    }
  };

  const fetchTrlList = async () => {
    try {
      const response = await getTRLList();
      setTrlList(response);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch TRL list.");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleEditorChange = (value) => {
    setForm({
      ...form,
      description: value,
    });
  };

  const handleSave = async () => {
    try {
      const updatedProduct = {
        ...product,
        title: form.title,
        type: form.type,
        description: form.description,
        categories: form.categories
          .split(",")
          .map((category) => category.trim()),
        businessModels: form.businessModels
          .split(",")
          .map((model) => model.trim()),
        trl: form.trl,
        investmentEffort: form.investmentEffort,
        cost: form.cost,
        videoUrl: form.videoUrl,
      };
      await dispatch(updateProduct(updatedProduct));
      toast.success("Product saved successfully.");
    } catch (error) {
      console.error(error);
      toast.error("Failed to save product.");
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900">Edit Product</h1>
      <div className="mt-6 bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6">
            <InputField
              label="Title"
              name="title"
              value={form.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col-span-6">
            <SelectField
              label="Type"
              name="type"
              value={form.type}
              onChange={handleInputChange}
              options={[
                { label: "Physical", value: "physical" },
                { label: "Digital", value: "digital" },
              ]}
              required
            />
          </div>
          <div className="col-span-6">
            <Editor value={form.description} onChange={handleEditorChange} />
          </div>
          <div className="col-span-6">
            <InputField
              label="Categories"
              name="categories"
              value={form.categories}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-6">
            <InputField
              label="Business Models"
              name="businessModels"
              value={form.businessModels}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-6">
            <SelectField
              label="TRL"
              name="trl"
              value={form.trl}
              onChange={handleInputChange}
              options={trlList}
            />
          </div>
          <div className="col-span-6">
            <InputField
              label="Investment Effort"
              name="investmentEffort"
              value={form.investmentEffort}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-6">
            <InputField
              label="Cost"
              name="cost"
              value={form.cost}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-6">
            <InputField
              label="Video URL"
              name="videoUrl"
              value={form.videoUrl}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-6">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductEdit;
