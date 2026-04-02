const RoleSwitcher = ({ role, setRole }) => (
  <select
    value={role}
    onChange={(e) => setRole(e.target.value)}
    className="border dark:border-gray-600 px-2 py-1 rounded dark:bg-gray-700 dark:text-white"
  >
    <option value="viewer">Viewer</option>
    <option value="admin">Admin</option>
  </select>
);

export default RoleSwitcher;
