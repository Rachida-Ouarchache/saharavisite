import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, NavLink, useNavigate } from 'react-router-dom';
import {
  FiHome, FiMap, FiMapPin, FiBookmark, FiUsers, FiStar,
  FiLogOut, FiMenu, FiX, FiPlus, FiEdit, FiTrash2, FiEye,
  FiCheck, FiAlertCircle,
} from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';
import { toursAPI, destinationsAPI, bookingsAPI, reviewsAPI } from '../../utils/api';
import LoadingSpinner from '../../components/LoadingSpinner';

const AdminLayout = ({ children }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => { logout(); navigate('/admin/login'); };

  const navItems = [
    { to: '/admin', label: 'Dashboard', icon: <FiHome size={18} /> },
    { to: '/admin/tours', label: 'Tours', icon: <FiMap size={18} /> },
    { to: '/admin/destinations', label: 'Destinations', icon: <FiMapPin size={18} /> },
    { to: '/admin/bookings', label: 'Bookings', icon: <FiBookmark size={18} /> },
    { to: '/admin/reviews', label: 'Reviews', icon: <FiStar size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-primary-900 text-white flex flex-col transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="p-5 border-b border-primary-700 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 gradient-gold rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">T</span>
            </div>
            <span className="font-bold text-white">Sahara Visite Admin</span>
          </Link>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-white/60 hover:text-white">
            <FiX size={20} />
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navItems.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/admin'}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  isActive ? 'bg-gold-500 text-white' : 'text-primary-200 hover:bg-primary-700 hover:text-white'
                }`
              }
            >
              {icon} {label}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-primary-700">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center text-white text-xs font-bold">
              {user?.name?.charAt(0)}
            </div>
            <div className="min-w-0">
              <div className="text-sm font-medium text-white truncate">{user?.name}</div>
              <div className="text-xs text-primary-300 truncate">{user?.email}</div>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 w-full px-4 py-2.5 rounded-xl text-sm text-red-300 hover:bg-red-500/20 hover:text-red-200 transition-all"
          >
            <FiLogOut size={16} /> Sign Out
          </button>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main */}
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen">
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-4">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-gray-500 hover:text-gray-700">
            <FiMenu size={22} />
          </button>
          <h1 className="font-semibold text-gray-800">Admin Dashboard</h1>
          <Link to="/" target="_blank" className="ml-auto text-sm text-gold-500 hover:text-gold-600 flex items-center gap-1">
            <FiEye size={14} /> View Site
          </Link>
        </header>
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

// Stats Overview
const DashboardHome = () => {
  const [stats, setStats] = useState({ bookings: 0, pending: 0, tours: 0 });
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      bookingsAPI.getAll({ limit: 5 }),
      toursAPI.getAll({ limit: 1 }),
    ]).then(([b, t]) => {
      setBookings(b.data?.slice(0, 5) || []);
      const pending = b.data?.filter(bk => bk.status === 'pending').length || 0;
      setStats({ bookings: b.total || 0, pending, tours: t.total || 0 });
    }).catch(console.error).finally(() => setLoading(false));
  }, []);

  if (loading) return <LoadingSpinner />;

  const statusColor = { pending: 'bg-amber-100 text-amber-700', confirmed: 'bg-green-100 text-green-700', cancelled: 'bg-red-100 text-red-700', completed: 'bg-blue-100 text-blue-700' };

  return (
    <div className="space-y-6">
      <h2 className="font-serif text-2xl text-primary-700 font-bold">Welcome back 👋</h2>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {[
          { label: 'Total Bookings', value: stats.bookings, icon: <FiBookmark />, color: 'bg-blue-50 text-blue-600' },
          { label: 'Pending Bookings', value: stats.pending, icon: <FiAlertCircle />, color: 'bg-amber-50 text-amber-600' },
          { label: 'Active Tours', value: stats.tours, icon: <FiMap />, color: 'bg-green-50 text-green-600' },
        ].map(({ label, value, icon, color }) => (
          <div key={label} className="bg-white rounded-2xl p-6 shadow-card flex items-center gap-4">
            <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center text-xl`}>{icon}</div>
            <div>
              <div className="text-2xl font-bold text-gray-800">{value}</div>
              <div className="text-sm text-gray-500">{label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Bookings */}
      <div className="bg-white rounded-2xl shadow-card overflow-hidden">
        <div className="p-5 border-b border-gray-100 flex items-center justify-between">
          <h3 className="font-semibold text-gray-800">Recent Bookings</h3>
          <Link to="/admin/bookings" className="text-sm text-gold-500 hover:text-gold-600">View all</Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                {['Confirmation', 'Client', 'Tour', 'Date', 'Status'].map((h) => (
                  <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {bookings.map((b) => (
                <tr key={b._id} className="hover:bg-gray-50">
                  <td className="px-5 py-3 font-mono text-xs text-gray-600">{b.confirmationNumber}</td>
                  <td className="px-5 py-3 font-medium text-gray-800">{b.firstName} {b.lastName}</td>
                  <td className="px-5 py-3 text-gray-600 max-w-[180px] truncate">{b.tourName || '—'}</td>
                  <td className="px-5 py-3 text-gray-500">{b.startDate ? new Date(b.startDate).toLocaleDateString() : '—'}</td>
                  <td className="px-5 py-3">
                    <span className={`badge ${statusColor[b.status]}`}>{b.status}</span>
                  </td>
                </tr>
              ))}
              {bookings.length === 0 && (
                <tr><td colSpan={5} className="px-5 py-8 text-center text-gray-400">No bookings yet</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Tours Management
const AdminTours = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    toursAPI.getAll({ limit: 20 }).then((res) => {
      setTours(res.data || []);
      setTotal(res.total || 0);
    }).catch(console.error).finally(() => setLoading(false));
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-2xl text-primary-700 font-bold">Tours ({total})</h2>
        <Link to="/admin/tours/new" className="btn-primary text-sm py-2">
          <FiPlus size={16} /> Add Tour
        </Link>
      </div>
      <div className="bg-white rounded-2xl shadow-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                {['Tour', 'Region', 'Duration', 'Price', 'Rating', 'Status', 'Actions'].map((h) => (
                  <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {tours.map((tour) => (
                <tr key={tour._id} className="hover:bg-gray-50">
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <img src={tour.coverImage} alt="" className="w-10 h-8 object-cover rounded" />
                      <span className="font-medium text-gray-800 max-w-[180px] truncate">{tour.title}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-gray-600">{tour.region}</td>
                  <td className="px-5 py-3 text-gray-600">{tour.duration}d</td>
                  <td className="px-5 py-3 font-semibold text-primary-700">${tour.price}</td>
                  <td className="px-5 py-3">⭐ {tour.rating?.toFixed(1)} ({tour.ratingsCount})</td>
                  <td className="px-5 py-3">
                    <span className={`badge ${tour.active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                      {tour.active ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex gap-2">
                      <Link to={`/tours/${tour.slug}`} target="_blank" className="p-1.5 text-gray-400 hover:text-blue-600 transition-colors"><FiEye size={15} /></Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Bookings Management
const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [updatingId, setUpdatingId] = useState(null);

  useEffect(() => {
    bookingsAPI.getAll({ limit: 50 }).then((res) => {
      setBookings(res.data || []);
      setTotal(res.total || 0);
    }).catch(console.error).finally(() => setLoading(false));
  }, []);

  const updateStatus = async (id, status) => {
    setUpdatingId(id);
    try {
      await bookingsAPI.updateStatus(id, { status });
      setBookings((prev) => prev.map((b) => b._id === id ? { ...b, status } : b));
    } catch (err) { console.error(err); }
    finally { setUpdatingId(null); }
  };

  if (loading) return <LoadingSpinner />;

  const statusColor = { pending: 'bg-amber-100 text-amber-700', confirmed: 'bg-green-100 text-green-700', cancelled: 'bg-red-100 text-red-700', completed: 'bg-blue-100 text-blue-700' };

  return (
    <div className="space-y-6">
      <h2 className="font-serif text-2xl text-primary-700 font-bold">Bookings ({total})</h2>
      <div className="bg-white rounded-2xl shadow-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                {['Ref', 'Client', 'Tour', 'Date', 'Pax', 'Price', 'Status', 'Action'].map((h) => (
                  <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {bookings.map((b) => (
                <tr key={b._id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-mono text-xs text-gray-500">{b.confirmationNumber}</td>
                  <td className="px-4 py-3">
                    <div className="font-medium text-gray-800">{b.firstName} {b.lastName}</div>
                    <div className="text-xs text-gray-400">{b.email}</div>
                  </td>
                  <td className="px-4 py-3 text-gray-600 max-w-[140px] truncate">{b.tourName || '—'}</td>
                  <td className="px-4 py-3 text-gray-500 text-xs">{b.startDate ? new Date(b.startDate).toLocaleDateString() : '—'}</td>
                  <td className="px-4 py-3 text-gray-600">{b.adults}A {b.children > 0 ? `${b.children}C` : ''}</td>
                  <td className="px-4 py-3 font-semibold text-primary-700">{b.totalPrice ? `$${b.totalPrice}` : '—'}</td>
                  <td className="px-4 py-3">
                    <span className={`badge ${statusColor[b.status]}`}>{b.status}</span>
                  </td>
                  <td className="px-4 py-3">
                    <select
                      value={b.status}
                      onChange={(e) => updateStatus(b._id, e.target.value)}
                      disabled={updatingId === b._id}
                      className="text-xs border border-gray-200 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-primary-300"
                    >
                      {['pending', 'confirmed', 'cancelled', 'completed'].map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
              {bookings.length === 0 && (
                <tr><td colSpan={8} className="px-5 py-8 text-center text-gray-400">No bookings yet</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Reviews Management
const AdminReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    reviewsAPI.getAll({ approved: 'false' }).then((res) => {
      reviewsAPI.getAll({ approved: 'true' }).then((approved) => {
        setReviews([...(res.data || []), ...(approved.data || [])]);
      });
    }).catch(console.error).finally(() => setLoading(false));
  }, []);

  const approveReview = async (id) => {
    try {
      await reviewsAPI.update(id, { approved: true });
      setReviews((prev) => prev.map((r) => r._id === id ? { ...r, approved: true } : r));
    } catch (err) { console.error(err); }
  };

  const deleteReview = async (id) => {
    if (!window.confirm('Delete this review?')) return;
    try {
      await reviewsAPI.delete(id);
      setReviews((prev) => prev.filter((r) => r._id !== id));
    } catch (err) { console.error(err); }
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="space-y-6">
      <h2 className="font-serif text-2xl text-primary-700 font-bold">Reviews ({reviews.length})</h2>
      <div className="space-y-4">
        {reviews.map((r) => (
          <div key={r._id} className={`bg-white rounded-2xl p-5 shadow-card border-l-4 ${r.approved ? 'border-green-400' : 'border-amber-400'}`}>
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-gray-800">{r.name}</span>
                  <span className="text-gray-400 text-xs">({r.nationality})</span>
                  <span className={`badge ${r.approved ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                    {r.approved ? 'Approved' : 'Pending'}
                  </span>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map((s) => (
                      <span key={s} className={s <= r.rating ? 'text-gold-500' : 'text-gray-200'}>★</span>
                    ))}
                  </div>
                </div>
                {r.title && <p className="font-medium text-gray-700 text-sm mb-1">{r.title}</p>}
                <p className="text-gray-600 text-sm">{r.comment}</p>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                {!r.approved && (
                  <button onClick={() => approveReview(r._id)} className="p-2 text-green-500 hover:bg-green-50 rounded-lg transition-colors" title="Approve">
                    <FiCheck size={16} />
                  </button>
                )}
                <button onClick={() => deleteReview(r._id)} className="p-2 text-red-400 hover:bg-red-50 rounded-lg transition-colors" title="Delete">
                  <FiTrash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
        {reviews.length === 0 && <p className="text-center text-gray-400 py-12">No reviews yet.</p>}
      </div>
    </div>
  );
};

// Main Dashboard with Router
const AdminDashboard = () => (
  <AdminLayout>
    <Routes>
      <Route index element={<DashboardHome />} />
      <Route path="tours" element={<AdminTours />} />
      <Route path="bookings" element={<AdminBookings />} />
      <Route path="reviews" element={<AdminReviews />} />
    </Routes>
  </AdminLayout>
);

export default AdminDashboard;
