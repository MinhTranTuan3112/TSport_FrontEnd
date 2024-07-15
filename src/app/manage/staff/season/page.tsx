"use client";
import { HouseIcon } from "@/components/icons/breadcrumb/house-icon"
import { Button, Chip, DatePicker, Image, Input, Link, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Pagination, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, useDisclosure } from "@nextui-org/react"
import React, { useState } from 'react'
import { faEdit, faRemove, faEye, faSoccerBall } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SearchIcon } from "@/components/icons/searchicon";

const SeasonsSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const [viewDetail, setViewDetail] = useState(false);
  const seasons = [
    {
      id: 1,
      name: "sp23",
      start: "10/6/2024",
      end: "18/8/2024",
      status: "status",
    },
    {
      id: 2,
      name: "sp23",
      start: "10/6/2024",
      end: "18/8/2024",
      status: "status",
    },
    {
      id: 3,
      name: "sp23",
      start: "10/6/2024",
      end: "18/8/2024",
      status: "status",
    },
    {
      id: 4,
      name: "sp23",
      start: "10/6/2024",
      end: "18/8/2024",
      status: "status",
    },
    {
      id: 5,
      name: "sp23",
      start: "10/6/2024",
      end: "18/8/2024",
      status: "status",
    },
    {
      id: 6,
      name: "sp23",
      start: "10/6/2024",
      end: "18/8/2024",
      status: "status",
    },

  ];
  return (
    <div className="my-14 lg:px-6 max-w-[95rem] mx-auto w-full flex flex-col gap-4">
      <ul className="flex">
        <li className="flex gap-2">
          <HouseIcon />
          <Link href={"/manage/staff/tshirt"}>
            <span>Home</span>
          </Link>
          <span> / </span>{" "}
        </li>

        <li className="flex gap-2">
          <FontAwesomeIcon
            icon={faSoccerBall}
            className="text-black-500"
          />
          <span>Mùa giải</span>
          <span> / </span>{" "}
        </li>
        <li className="flex gap-2">
          <span>Danh sách</span>
        </li>
      </ul>

      <h3 className="text-xl font-semibold">Tất cả Mùa giải</h3>
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
          <Input
            startContent={<SearchIcon />}
            isClearable
            className="w-full"
            classNames={{
              input: "w-full",
              mainWrapper: "w-full",
            }}
            placeholder="Search..."
          />
        </div>
        <div className="flex flex-row gap-3.5 flex-wrap">
          <div>
            <Button onClick={() => setIsOpen(true)} color='primary'>Thêm mùa giải</Button>

            <Modal isOpen={isOpen}
              onClose={() => {
                setIsOpen(false);
                setIsEdit(false);
              }} placement='top-center' size="4xl">
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className='flex flex-col gap-1'>
                      {isEdit ? "Sửa thông tin" : "Thêm mùa giải"}
                    </ModalHeader>
                    <ModalBody>
                      <div className="flex flex-row">
                        <div className="w-2/5">
                          <Image
                            isBlurred
                            width={240}
                            src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                            alt="NextUI Album Cover"
                            className="m-5"
                          />
                          <Input
                            type="file"
                            accept="image/*"
                          />
                        </div>
                        <div className="w-3/5">
                          <Input label='Mã mùa giải' variant='bordered' className="w-full p-2" />
                          <Input label='Tên mùa giải' variant='bordered' className="w-full p-2" />
                          <DatePicker label='Ngày bắt đầu' variant='bordered' className="w-full p-2" />
                          <DatePicker label='Ngày kết thúc' variant='bordered' className="w-full p-2" />
                        </div>
                      </div>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="flat" onClick={onClose}>
                        Đóng
                      </Button>
                      <Button color="primary" onPress={onClose}>
                        {isEdit ? "Lưu" : "Thêm"}
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </div>
        </div>
      </div>
      <div className="max-w-[95rem] mx-auto w-full">
        {/* <TableWrapper /> */}
        <div className=" w-full flex flex-col gap-4">
          <Table aria-label="Users Table">
            <TableHeader>
              <TableColumn className="text-2xl">Mã Mùa giải</TableColumn>
              <TableColumn className="text-2xl">Tên mùa giải</TableColumn>
              <TableColumn className="text-2xl">Ngày bắt đầu</TableColumn>
              <TableColumn className="text-2xl">Ngày kết thúc</TableColumn>
              <TableColumn className="text-2xl">Trạng thái</TableColumn>
              {<TableColumn className="text-2xl">...</TableColumn>
            </TableHeader>
            {seasons.length == 0 ? (
              <TableBody emptyContent={"No data to display."}>
                {[]}
              </TableBody>
            ) : (
              <TableBody>
                {seasons.map((season, index) => (
                  <TableRow key={index}>
                    <TableCell className="text-2xl">
                      {season.id}
                    </TableCell>
                    <TableCell className="text-2xl">
                      {season.name}
                    </TableCell>
                    <TableCell className="text-2xl">
                      {season.start}
                    </TableCell>
                    <TableCell className="text-2xl">
                      {season.end}
                    </TableCell>
                    <TableCell className="text-2xl">
                      <Chip
                        size="md"
                        variant="flat"
                        color={
                          season.status === "active"
                            ? "success"
                            : season.status === "paused"
                              ? "danger"
                              : "warning"
                        }
                      >
                        {season.status}
                      </Chip>
                    </TableCell>
                    <TableCell>
                      <Button
                        className="w-1/6 text-black"
                        aria-label="detail"
                        onClick={() => setViewDetail(true)}
                      >
                        <FontAwesomeIcon
                          icon={faEye}
                          className="text-white-500"
                        />
                      </Button>
                      <Button
                        className="w-1/6 bg-yellow-500 text-white"
                        aria-label="edit"
                        onClick={() => {
                          setIsEdit(true);
                          setIsOpen(true);
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faEdit}
                          className="text-white-500"
                        />
                      </Button>
                      <Button
                        className="w-1/6 bg-red-500 text-white"
                        aria-label="remove"
                        onClick={() => setIsConfirm(true)}
                      >
                        <FontAwesomeIcon
                          icon={faRemove}
                          className="text-white-500"
                        />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            )}
          </Table>
          <Pagination showControls total={10} initialPage={1} />

          <Modal size="2xl" isOpen={isConfirm} onClose={() => setIsConfirm(false)}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Xác nhận
                  </ModalHeader>
                  <ModalBody>
                    <div className="w-full flex items-center justify-center">
                      <p className="text-4xl">
                        Xóa mùa này ?
                      </p>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Không
                    </Button>
                    <Button color="success" onPress={onClose}>
                      Có
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>

          <Modal size="4xl" isOpen={viewDetail} onClose={() => setViewDetail(false)}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Chi tiết
                  </ModalHeader>
                  <ModalBody>
                    <div className="flex flex-row">
                      <div className="w-2/5 flex justify-center items-start">
                        <Image
                          isBlurred
                          width={240}
                          src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                          alt="NextUI Album Cover"
                          className="m-5"
                        />
                      </div>
                      <div className="w-3/5">
                        <p className="w-full p-2">Mã mùa giải</p>
                        <p className="w-full p-2">Tên mùa giải</p>
                        <p className="w-full p-2">Ngày bắt đầu</p>
                        <p className="w-full p-2">Ngày kết thúc</p>
                        <p className="w-full p-2">Trạng thái</p>
                      </div>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="success" onPress={onClose}>
                      Đóng
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default SeasonsSection;