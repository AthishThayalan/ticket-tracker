type HeaderProps = {
  nameFilter: string;
  handleNameFilterChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  roleFilter: string;
  handleRoleFilterChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};
const Header = ({
  nameFilter,
  handleNameFilterChange,
  roleFilter,
  handleRoleFilterChange,
}: HeaderProps) => {
  return (
    <header>
      <h1>Ticket Tracker</h1>
      <div className="filter">
        <input
          type="text"
          value={nameFilter}
          onChange={handleNameFilterChange}
          placeholder="Filter by Name"
          className="name-filter"
        />
        <select
          value={roleFilter}
          onChange={handleRoleFilterChange}
          className="role-filter"
        >
          <option value="">Any</option>
          <option value="Junior Software Developer">
            Junior Software Developer
          </option>
          <option value="Senior Software Developer">
            Senior Software Developer
          </option>
          <option value="Project Manager">Project Manager</option>
          <option value="Tester">Tester</option>
          <option value="Hard Man">Hard man</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
