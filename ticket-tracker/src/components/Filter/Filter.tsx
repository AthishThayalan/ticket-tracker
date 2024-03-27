import team from "../../data/team";
type FilterProp = {
  nameFilter: string;
  handleNameFilterChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  roleFilter: string;
  handleRoleFilterChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};
const Filter: React.FC<FilterProp> = ({
  nameFilter,
  handleNameFilterChange,
  roleFilter,
  handleRoleFilterChange,
}: FilterProp) => {
  const rolesSet = new Set(team.map((member) => member.role));
  const rolesArray = Array.from(rolesSet);
  return (
    <div className="filter">
      <input
        type="text"
        value={nameFilter}
        onChange={handleNameFilterChange}
        placeholder="Filter by Name"
        className="filter__input"
      />
      <select
        value={roleFilter}
        onChange={handleRoleFilterChange}
        className="filter__select"
      >
        <option value="">Any</option>
        {rolesArray.map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Filter;
