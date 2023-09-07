import { MdContentPasteSearch, MdInsights } from "react-icons/md";
import { MdLibraryAdd } from "react-icons/md";
import { MdOutlineInventory2 } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import { TbUserPlus } from "react-icons/tb";
import { TbUser } from "react-icons/tb";
import { BsPalette2 } from "react-icons/bs";
import { IoMdPerson } from "react-icons/io";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { BsFillCartFill } from "react-icons/bs";


// main function icons
import { BiStoreAlt } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";

// delivery function icons
import { FaUserPlus } from "react-icons/fa";
import { TbPackageExport } from "react-icons/tb";
import { BiTimer } from "react-icons/bi";
import { AiOutlineFileDone } from "react-icons/ai";
import { FaUserEdit } from "react-icons/fa";

// inventory
import { BsCalculator } from "react-icons/bs"



const SidebarItems = [
	{
		id: 2000,
		icon: <BiStoreAlt />,
		text: "Product Management",
		nestedFunctions: [
			{
				id: 200,
				link: "/admin/products/addProduct",
				nestedItemicon: <MdLibraryAdd />,
				nestedItemtext: "Add Product",
			},
			{
				id: 201,
				link: "/admin/products/manageProducts",
				nestedItemicon: <BsFillBoxSeamFill />,
				nestedItemtext: "Manage Products",
			},
			{
				id: 202,
				link: "/admin/products/manageOrders",
				nestedItemicon: <BsFillCartFill />,
				nestedItemtext: "Orders",
			},

			{
				id: 203,
				link: "/admin/products/insights",
				nestedItemicon: <MdInsights />,
				nestedItemtext: "Insights",
			},
		],
	},

	{
		id: 1000,
		icon: <TbTruckDelivery />,
		text: "Delivery Management",
		nestedFunctions: [
			{
				id: 100,
				link: "/admin/delivery/add-driver",
				nestedItemicon: <FaUserPlus />,
				nestedItemtext: "Add Driver",
			},

			{
				id: 101,
				link: "/admin/delivery/manage-driver",
				nestedItemicon: <FaUserEdit />,
				nestedItemtext: "View Drivers",
			},


			{
				id: 102,
				link: "/admin/delivery/view-order",
				nestedItemicon: <TbPackageExport />,
				nestedItemtext: "Assign Driver",
			},

			{
				id: 103,
				link: "/admin/delivery/processing-order",
				nestedItemicon: <BiTimer />,
				nestedItemtext: "Processing Orders",
			},

			{
				id: 104,
				link: "/admin/delivery/completed-order",
				nestedItemicon: <AiOutlineFileDone />,
				nestedItemtext: "Completed Orders",
			},

			// {
			// 	id: 805,
			// 	link: "",
			// 	nestedItemicon: <MdInsights />,
			// 	nestedItemtext: "Insights",
			// },
		],
	},
	
	{
		id: 1000,
		icon: <BsPalette2 />,
		text: "Inventory Management",
		nestedFunctions: [
			{
				id: 100,
				link: "/admin/inventory/overview",
				nestedItemicon: <MdContentPasteSearch />,
				nestedItemtext: "Overview",
			},

			{
				id: 101,
				link: "/admin/inventory/add-item",
				nestedItemicon: <MdLibraryAdd />,
				nestedItemtext: "Add new item",
			},

			{
				id: 103,
				link: "/admin/inventory/manage-inventory",
				nestedItemicon: <MdOutlineInventory2 />,
				nestedItemtext: "Manage inventory",
			},

			{
				id: 104,
				link: "/admin/inventory/release-search",
				nestedItemicon: <BiCategoryAlt />,
				nestedItemtext: "Release items",
			},

			{
				id: 105,
				link: "/admin/inventory/supplier-registration",
				nestedItemicon: <TbUserPlus />,
				nestedItemtext: "Add supplier",
			},

			{
				id: 106,
				link: "/admin/inventory/manage-suppliers",
				nestedItemicon: <TbUser />,
				nestedItemtext: "Manage suppliers",
			},
			
			{
				id: 108,
				link: "/admin/inventory/rop-calculator",
				nestedItemicon: <BsCalculator />,
				nestedItemtext: "ROP Calculator",
			},
		],
	},


	{
		id: 7000,
		icon: <IoMdPerson />,
		text: "Customer Management",
		nestedFunctions: [
			{
				id: 700,
				link: "",
				nestedItemicon: <BsFillBoxSeamFill />,
				nestedItemtext: "Products",
			},

			{
				id: 701,
				link: "",
				nestedItemicon: <BsFillCartFill />,
				nestedItemtext: "Orders",
			},

			{
				id: 702,
				link: "",
				nestedItemicon: <MdInsights />,
				nestedItemtext: "Insights",
			},
		],
	},

];

export default SidebarItems;