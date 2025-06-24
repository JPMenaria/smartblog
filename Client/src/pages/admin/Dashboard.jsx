import React, { useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
import BlogTableItem from '../../components/admin/BlogTableItem';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: [],
  });

  const { axios } = useAppContext();

  const fetchDashboard = async () => {
    try {
      const { data } = await axios.get('/api/admin/dashboard');
      data.success
        ? setDashboardData(data.dashboardData)
        : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  return (
    <div className="flex-1 p-4 md:p-10 bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen">

      {/* Cards */}
      <div className="flex flex-wrap gap-6 mb-8">
        <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 min-w-[180px]">
          <img src={assets.dashboard_icon_1} alt="" className="w-10 h-10" />
          <div>
            <p className="text-2xl font-bold text-gray-700">{dashboardData.blogs}</p>
            <p className="text-gray-400 font-medium">Blogs</p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 min-w-[180px]">
          <img src={assets.dashboard_icon_2} alt="" className="w-10 h-10" />
          <div>
            <p className="text-2xl font-bold text-gray-700">{dashboardData.comments}</p>
            <p className="text-gray-400 font-medium">Comments</p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 min-w-[180px]">
          <img src={assets.dashboard_icon_3} alt="" className="w-10 h-10" />
          <div>
            <p className="text-2xl font-bold text-gray-700">{dashboardData.drafts}</p>
            <p className="text-gray-400 font-medium">Drafts</p>
          </div>
        </div>
      </div>

      {/* Latest Blogs Section */}
      <div>
        <div className="flex items-center gap-3 mb-4 text-gray-700">
          <img src={assets.dashboard_icon_4} alt="" className="w-6 h-6" />
          <p className="text-lg font-semibold">Latest Blogs</p>
        </div>

        <div className="relative overflow-x-auto rounded-2xl shadow-lg bg-white max-w-6xl scrollbar-hide">
          <table className="w-full text-sm text-gray-600">
            <thead className="text-xs uppercase bg-gray-100 text-gray-700">
              <tr>
                <th scope="col" className="px-4 py-5">#</th>
                <th scope="col" className="px-4 py-5">Blog Title</th>
                <th scope="col" className="px-4 py-5 max-sm:hidden">Date</th>
                <th scope="col" className="px-4 py-5 max-sm:hidden">Status</th>
                <th scope="col" className="px-4 py-5">Action</th>
              </tr>
            </thead>

            <tbody>
              {dashboardData.recentBlogs.map((blog, index) => (
                <BlogTableItem
                  key={blog._id}
                  blog={blog}
                  fetchBlogs={fetchDashboard}
                  index={index + 1}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
